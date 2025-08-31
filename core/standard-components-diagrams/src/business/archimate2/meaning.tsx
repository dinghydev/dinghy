import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEANING = {
  _style: {
    entity: 'fillColor=#ffff99;whiteSpace=wrap;shape=cloud;html=1;',
  },
  _width: 100,
  _height: 75,
}

export function Meaning(props: DiagramNodeProps) {
  return <Shape {...MEANING} {...props} _style={extendStyle(MEANING, props)} />
}
