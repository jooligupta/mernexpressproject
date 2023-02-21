class StudentController {
  static display = async (req, res) => {
    try {
      res.send("hello display");
    } catch (err) {
      console.log(err);
    }
  };
  static create = async (req, res) => {
    try {
      res.send("hello create");
    } catch (err) {
      console.log(err);
    }
  };
  static view = async (req, res) => {
    try {
      res.send("hello display");
    } catch (err) {
      console.log(err);
    }
  };
  static edit = async (req, res) => {
    try {
      res.send("hello edit");
    } catch (err) {
      console.log(err);
    }
  };
  static delete = async (req, res) => {
    try {
      res.send("hello delete");
    } catch (err) {
      console.log(err);
    }
  };
}
module.exports = StudentController;
