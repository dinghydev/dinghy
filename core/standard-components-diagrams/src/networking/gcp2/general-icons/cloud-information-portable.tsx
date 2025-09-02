import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_INFORMATION_PORTABLE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cloud_information',
  },
  _original_width: 100,
  _original_height: 79,
}

export function CloudInformationPortable(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_INFORMATION_PORTABLE}
      {...props}
      _style={extendStyle(CLOUD_INFORMATION_PORTABLE, props)}
    />
  )
}
