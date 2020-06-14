<div align="center">
  <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2018/02/legiao_tlMINOYZUHSv8p9oLzFXn50fKPswRVg7G6AEChjxyq.png.jpeg">
  <h1>Heroes Deno REST API</h1>
</div>

#### A Simple Guide to create an API using Deno and MongoDB

First of all, you need check if you have Deno installed on your OS. If you don't have, check the documentation.

<p align="center">
  <a href="https://deno.land/manual">How to use</a>
</p>

#### Getting Started

- Below, we have the modules that I used in my API

```bash
https://deno.land/x/mongo@v0.6.0/mod.ts
```

```bash
https://deno.land/x/abc@v1.0.0-rc2/mod.ts
```

- Clone this repo to your local machine using `https://github.com/thiagopaschoal/deno-rest-api`

```bash
cd deno-rest-api
deno run --allow-write --allow-read --allow-plugin --allow-net --allow-env --unstable app.ts
```

#### References

- https://dev.to/slimhmidi/create-a-server-with-deno-and-mongo-206l
- https://docs.mongodb.com/manual/reference/program/mongoexport/
- https://deno.land/
