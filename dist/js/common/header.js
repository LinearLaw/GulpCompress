"use strict";$("#logOutBtn").click(function(){$cookie.del("SID"),$cookie.del("UIN"),$("#logOutModal").modal("hide"),location.href=$config.loginPage});