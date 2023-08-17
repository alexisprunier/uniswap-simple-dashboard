import React, { useState, useEffect } from 'react'
import './index.css'

interface CommandBarProps {
  backAction?: () => void;
  nextAction?: () => void;
}

const CommandBar: React.FC<CommandBarProps> = (props: CommandBarProps) => {
  return (
    <div className="CommandBar">
      {props.backAction && <div onClick={props.backAction}>&lt;</div>}
      {props.nextAction && <div onClick={props.nextAction}>&gt;</div>}
    </div>
  );
}

export default CommandBar;
