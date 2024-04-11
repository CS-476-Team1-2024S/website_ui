import sys
import paramiko
import os
from dotenv import load_dotenv

if __name__ == "__main__":
  location = sys.argv[1] #PROD or DEV

load_dotenv()

user_name = os.getenv("SFTP_USER") #Username
pass_word = os.getenv("SFTP_PASS") #Password

class MySFTPClient(paramiko.SFTPClient):
    def put_dir(self, source, target):
        ''' Uploads the contents of the source directory to the target path. The
            target directory needs to exists. All subdirectories in source are 
            created under target.
        '''
        for item in os.listdir(source):
            if os.path.isfile(os.path.join(source, item)):
                self.put(os.path.join(source, item), '%s/%s' % (target, item))
            else:
                self.mkdir('%s/%s' % (target, item), ignore_existing=True)
                self.put_dir(os.path.join(source, item), '%s/%s' % (target, item))

    def mkdir(self, path, mode=511, ignore_existing=False):
        ''' Augments mkdir by adding an option to not fail if the folder exists  '''
        try:
            super(MySFTPClient, self).mkdir(path, mode)
        except IOError:
            if ignore_existing:
                pass
            else:
                raise
                
transport = paramiko.Transport(("washington.uww.edu", 22))
transport.connect(username=user_name, password=pass_word)
sftp = MySFTPClient.from_transport(transport)
sftp.put_dir("build", "/home/projects/cs476/knowledgebase/public_html/" + location)
print("Upload complete.")
sftp.close()