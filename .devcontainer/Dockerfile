
FROM node:20

RUN apt-get update && apt-get install -y --no-install-recommends \
    less \
    man-db \
    sudo \
    build-essential \
    python3 \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

ARG USERNAME=node
RUN echo "$USERNAME ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

WORKDIR /workspace

COPY ./package*.json ./

RUN ls -la /workspace

RUN npm ci --only=production

COPY . .

ENV DEVCONTAINER=true

EXPOSE 3000

USER $USERNAME

CMD ["npm", "start"]

