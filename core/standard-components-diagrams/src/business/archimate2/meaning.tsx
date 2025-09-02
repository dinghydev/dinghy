import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MEANING = {
  _style: {
    entity: 'fillColor=#ffff99;whiteSpace=wrap;shape=cloud;html=1;',
  },
  _original_width: 100,
  _original_height: 75,
}

export function Meaning(props: DiagramNodeProps) {
  return <Shape {...MEANING} {...props} _style={extendStyle(MEANING, props)} />
}
