import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEPARATOR_SIFTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.separators.separator,_sifter2;',
  },
  _width: 80,
  _height: 120,
}

export function SeparatorSifter(props: NodeProps) {
  return (
    <Shape
      {...SEPARATOR_SIFTER}
      {...props}
      _style={extendStyle(SEPARATOR_SIFTER, props)}
    />
  )
}
