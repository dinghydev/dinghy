import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CODEPLEX_CODE_SOURCE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.codeplex_code_source;',
  },
  _width: 50,
  _height: 37.5,
}

export function CodeplexCodeSource(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CODEPLEX_CODE_SOURCE)} />
}
