.PHONY: help install clean

help:
	cat $(lastword $(MAKEFILE_LIST))

install: \
	.env

.env:
	touch $@
	echo "CHROME_PORT=9876" >> $@

clean:
	rm -rf .env

