function capitalize(str) {
  return str ? str[0].toUpperCase() + str.substr(1, str.length) : '';
}

const blockTmpl = (block) =>
`import { cn } from '@bem-react/classname';
import * as React from 'react';

import './${block}.css';

const cn${block} = cn('${block}');

export interface I${block}Props {
  className?: string;
}

export const ${block}: React.SFC<I${block}Props> = (props) => (
  <div className={cn${block}()}></div>
);
`;

const elemTmpl = (block, elem) =>
`import { cn } from '@bem-react/classname';
import * as React from 'react';

import './${block}-${elem}.css';

const cn${block} = cn('${block}');

export interface I${block}${elem}Props {
  className?: string;
}

export const ${elem}: React.SFC<I${block}${elem}Props> = (props) => (
  <div className={cn${block}('${elem}')}></div>
);
`;

const blockModTmpl = (block, mod) => 
`import { ModBody } from '@bem-react/core';
import * as React from 'react';

import './${block}_${mod.name}${mod.val && '_' + mod.val}.css';
import { I${block}Props } from '../${block}';

export const ${block}${capitalize(mod.name)}${mod.val && capitalize(mod.val)}: ModBody<I${block}Props> = (Base, { className }) => (
  <div className={className}></div>
)
`;


module.exports = ({ block, elem, mod={} }) => {
  const { name: modName } = mod;
  if (block && elem) {
    return elemTmpl(block, elem);
  } else if (block && modName) {
    return blockModTmpl(block, mod);
  } else if (block) {
    return blockTmpl(block);
  }
}