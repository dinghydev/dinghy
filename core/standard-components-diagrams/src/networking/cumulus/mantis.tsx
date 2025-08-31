import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANTIS = {
  _style: {
    entity: 'fillColor=#7CCC6C;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _width: 60,
  _height: 60,
}

export function Mantis(props: DiagramNodeProps) {
  return <Shape {...MANTIS} {...props} _style={extendStyle(MANTIS, props)} />
}
