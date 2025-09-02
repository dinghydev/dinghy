import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KINESIS_ENABLED_APP = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.kinesis_enabled_app;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 64.5,
  _original_height: 67.5,
}

export function KinesisEnabledApp(props: DiagramNodeProps) {
  return (
    <Shape
      {...KINESIS_ENABLED_APP}
      {...props}
      _style={extendStyle(KINESIS_ENABLED_APP, props)}
    />
  )
}
