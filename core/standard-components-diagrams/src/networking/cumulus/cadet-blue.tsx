import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CADET_BLUE = {
  _style: {
    entity: 'fillColor=#AEB8C3;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function CadetBlue(props: DiagramNodeProps) {
  return (
    <Shape {...CADET_BLUE} {...props} _style={extendStyle(CADET_BLUE, props)} />
  )
}
