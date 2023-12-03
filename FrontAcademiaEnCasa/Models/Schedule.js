class Schedule {
    constructor( id, scheduleMode, scheduleAddress, duration, scheduleDateTime, courseId, teacherId, studentId, courseName, courseDescription, courseCostPerHour, teacherName, teacherEmail, studentName, studentEmail) {
      this.id = id;
      this.scheduleMode = scheduleMode;
      this.scheduleAddress = scheduleAddress;
      this.duration = duration;
      this.scheduleDateTime = scheduleDateTime;
      this.courseId = courseId;
      this.teacherId = teacherId;
      this.studentId = studentId;
      this.courseName = courseName;
      this.courseDescription = courseDescription;
      this.courseCostPerHour = courseCostPerHour;
      this.teacherName = teacherName;
      this.teacherEmail = teacherEmail;
      this.studentName = studentName;
      this.studentEmail = studentEmail;
    }
}

export default Schedule;