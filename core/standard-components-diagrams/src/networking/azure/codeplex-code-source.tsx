import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CODEPLEX_CODE_SOURCE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.codeplex_code_source;',
  },
  _original_width: 50,
  _original_height: 37.5,
}

export function CodeplexCodeSource(props: DiagramNodeProps) {
  return (
    <Shape
      {...CODEPLEX_CODE_SOURCE}
      {...props}
      _style={extendStyle(CODEPLEX_CODE_SOURCE, props)}
    />
  )
}
