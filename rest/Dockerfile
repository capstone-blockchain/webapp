FROM ubuntu:16.04

# Install NodeJS
RUN apt-get update \
&& apt-get install -y curl \
&& apt-get install -y git \
&& curl -sL https://deb.nodesource.com/setup_8.x | bash - \
&& apt-get install -y nodejs

# Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
&& echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
&& apt-get update \
&& apt-get install yarn

# Install global packages
RUN yarn global add npm-check-updates nodemon

# Create directory
RUN mkdir -p /rest
WORKDIR /rest

# Install app dependencies
COPY . /rest
RUN yarn
