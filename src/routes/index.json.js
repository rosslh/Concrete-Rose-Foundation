import dateformat from "dateformat";

function getData() {
  const teamFile = require("../../../content/team.json");

  const team = teamFile.map(member => {
    return {
      name: member.name,
      position: member.position,
      yearMajor: member.yearMajor,
      image: member.image
    };
  });

  const timelineFile = require("../../../content/timeline.json");

  const timeline = timelineFile
    .map(item => ({
      prettyDate: dateformat(item.date, "mmmm yyyy"),
      ...item
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 5);

  return { team, timeline };
}

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const { team, timeline } = getData();
  res.end(JSON.stringify({ team, timeline }));
}