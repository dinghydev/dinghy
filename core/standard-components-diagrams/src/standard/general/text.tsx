import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEXT = {
  _style: {
    entity:
      'text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;',
  },
  _width: 60,
  _height: 30,
}

export function Text(props: DiagramNodeProps) {
  return <Shape {...TEXT} {...props} _style={extendStyle(TEXT, props)} />
}
