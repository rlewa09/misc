import smtplib
import sys
from datetime import date

def send_mail(days):
	s = smtplib.SMTP('smtp.gmail.com', 587)
	s.starttls()
	s.login("***sender_mail***", "***password****")
	SUBJECT = "Milestone reached"
	TEXT = "Completed {} days".format(days)
	message = 'Subject: {}\n\n{}'.format(SUBJECT, TEXT)
	s.sendmail("***sender_mail***", "***receiver_mail***", message)
	s.quit()

def count_days():
	today = date.today()
	startdate = date(2023, 1, 4)
	deltaDays = today - startdate
	fib_start = 1
	nextCount = 0
	while fib_start <= deltaDays.days:
		fib_start += nextCount
		nextCount = fib_start
		if fib_start == deltaDays.days:
			send_mail(fib_start)
			sys.exit(0)


if __name__ == '__main__':
	count_days()

