export function Menu() {
  return (
    <nav className="p-2 border-b-[1px] border-[#19527C]">
      <ul className="flex space-x-4">
        <li>
          <a href="/about">About Me</a>
        </li>
        <li>
          <a href="/work-experience">Working Experience</a>
        </li>
        <li>
          <a href="/skill">Skill</a>
        </li>
        <li>
          <a href="/showcase">Showcase</a>
        </li>
        <li>
          <a href="/interesting-activity">Interesting Activity</a>
        </li>
        <li>
          <a href="/certificate">Certification</a>
        </li>
      </ul>
    </nav>
  );
}