module.exports = {
  // label
  insertLabel: 'INSERT INTO Label (name,description,color) VALUE(?,?,?);',
  selectLabel: 'SELECT label_id, name, description, color FROM Label;',
  updateLabel:
    'UPDATE Label SET name=?, description=?, color=? WHERE label_id=?;',
  deleteLabel: 'DELETE FROM Label WHERE label_id=?;',
  // milestone
  insertMilestone:
    'INSERT INTO Milestone (title,due_date,content) VALUES (?,?,?);',
  selectMilestone:
    'SELECT milestone_id,title,date_format(due_date,"%Y-%m-%d") AS due_date,content FROM Milestone;',
  updateMilestone:
    'UPDATE Milestone SET title=?, due_date=?, content=? WHERE milestone_id=?;',
  deleteMilestone: 'DELETE FROM Milestone WHERE milestone_id=?;',
  // user
  selectUser: 'SELECT user_id, username, social FROM User WHERE username=? and social=?',
  // issue
  insertIssue:
    'INSERT INTO Issue '
    + '(writer_id, write_time, title, is_open, milestone_id) '
    + 'VALUES((SELECT user_id from User WHERE username=?), ?, ?, 1, ?)',
  // issue_label
  insertIssueLabel: 'INSERT INTO Issue_Label (issue_id, label_id) VALUES ?',
};
