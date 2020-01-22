function getData() {
  const teamFile = require("../../../content/team.json");

  const team = teamFile
    .filter(member => !member.hidden)
    .map(member => {
      return {
        name: member.name,
        position: member.position,
        yearMajor: member.yearMajor,
        image: member.image,
        gitHub: member.gitHub,
        linkedIn: member.linkedIn,
        email: member.email,
        blurb: member.blurb
      };
    });

  return { team };
}

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  const { team } = getData();
  res.end(JSON.stringify({ team }));
}
