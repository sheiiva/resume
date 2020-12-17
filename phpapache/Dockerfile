FROM php:7.1-apache

RUN apt-get update && \
    docker-php-ext-install pdo_mysql mysqli mbstring
ADD ssl.conf /etc/apache2/sites-available/ssl.conf
ADD entrypoint.sh /opt/entrypoint.sh                                               

RUN chmod a+x /opt/entrypoint.sh                                                   
RUN /bin/bash -c "source /opt/entrypoint.sh /etc/apache2/ssl_keys localhost"       
RUN a2enmod ssl                                                                    
RUN a2ensite ssl                                                                   

CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]