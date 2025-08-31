import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SEPARATOR_SIFTER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator,_sifter2;',
  _width: 80,
  _height: 120,
}

export function SeparatorSifter(props: DiagramNodeProps) {
  return (
    <Shape
      {...SEPARATOR_SIFTER}
      {...props}
      _style={extendStyle(SEPARATOR_SIFTER, props)}
    />
  )
}
