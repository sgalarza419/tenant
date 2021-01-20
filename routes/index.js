const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const userRoutes = require("./user");
const authRoutes = require("./auth");

// userAuth Routes
router.use("/auth", authRoutes,()=>{
  console.log("i have routed auth: " ,authRoutes);
  });
  
// user Routes
router.use("/user", userRoutes,()=>{
console.log("i have routed userAuth: " ,userRoutes);
});

// API Routes
router.use("/api", apiRoutes,()=>{
  console.log("i have routed apiRoutes: " ,apiRoutes);
  });

// If no API routes are hit, send the React app
router.use(function(req, res) {
  console.log("no API routes are hit");
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;