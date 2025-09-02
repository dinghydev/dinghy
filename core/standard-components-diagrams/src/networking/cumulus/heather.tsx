import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HEATHER = {
  _style: {
    entity: 'fillColor=#D2D6DF;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Heather(props: DiagramNodeProps) {
  return <Shape {...HEATHER} {...props} _style={extendStyle(HEATHER, props)} />
}
