module.exports = {
  apps : [{
    name   : "app1",
    script : "./app.js",
    instances : "3",
    exec_mode : "cluster"
  }]
}
