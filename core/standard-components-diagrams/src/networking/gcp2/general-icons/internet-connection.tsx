import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERNET_CONNECTION = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.internet_connection',
  },
  _original_width: 100,
  _original_height: 83,
}

export function InternetConnection(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNET_CONNECTION}
      {...props}
      _style={extendStyle(INTERNET_CONNECTION, props)}
    />
  )
}
