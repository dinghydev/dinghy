import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MEANING = {
  _style: 'fillColor=#ffff99;whiteSpace=wrap;shape=cloud;html=1;',
  _width: 100,
  _height: 75,
}

export function Meaning(props: DiagramNodeProps) {
  return <Shape {...MEANING} {...props} />
}
