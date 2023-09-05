const students = [
    {student: 'Jone Doe', absent: true},
    {student: 'Jane Doe', absent: true},
    {student: 'Joe Doe', absent: false},
    {student: 'Mike Smith', absent: false},
    {student: 'Tim Love', absent: false},
    {student: 'Jill Jones', absent: false},
    {student: 'Tyler Lim', absent: true},
    {student: 'Kim Bron', absent: false},
  ];

  module.exports = {
    getAll: function() {
      return students;
    }
  };``