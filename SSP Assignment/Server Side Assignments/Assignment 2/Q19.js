function minutesToHoursAndMinutes(totalMinutes) {
    var hours = Math.floor(totalMinutes / 60);
    var minutes = totalMinutes % 60;
    return { hours: hours, minutes: minutes };
  }
  
  // Example usage:
  var totalMinutes = 135;
  var result = minutesToHoursAndMinutes(totalMinutes);
  console.log(result.hours + " hours and " + result.minutes + " minutes");
  // Output: "2 hours and 15 minutes"
  