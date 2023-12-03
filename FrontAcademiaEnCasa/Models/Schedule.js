class Schedule {
    constructor( id, duration, scheduleDateTime, courseId, teacherId, studentId, courseName, courseDescription, courseCostPerHour, teacherName, studentName) {
      this.id = id;
      this.duration = duration;
      this.scheduleDateTime = scheduleDateTime;
      this.courseId = courseId;
      this.teacherId = teacherId;
      this.studentId = studentId;
      this.courseName = courseName;
      this.courseDescription = courseDescription;
      this.courseCostPerHour = courseCostPerHour;
      this.teacherName = teacherName;
      this.studentName = studentName;
    }
}

export default Schedule;