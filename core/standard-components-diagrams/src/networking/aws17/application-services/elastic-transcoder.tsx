import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTIC_TRANSCODER = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.elastic_transcoder;fillColor=#D9A741;gradientColor=none;',
  _width: 76.5,
  _height: 93,
}

export function ElasticTranscoder(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_TRANSCODER}
      {...props}
      _style={extendStyle(ELASTIC_TRANSCODER, props)}
    />
  )
}
