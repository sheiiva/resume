######################################################
#                                                    #
#                Corentin COUTRET-ROZET              #
#                   ________________                 #
#                                                    #
# Github: https://github.com/sheiiva/resume          #
#                                                    #
######################################################

up:
	sudo docker-compose up -d

down:
	sudo docker-compose down -v

restart:
	sudo docker-compose down -v
	sudo docker-compose up -d

build:
	sudo docker-compose build

.PHONY: up down restart build