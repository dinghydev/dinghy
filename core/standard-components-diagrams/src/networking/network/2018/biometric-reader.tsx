import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIOMETRIC_READER = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.biometric_reader;',
  },
  _width: 60,
  _height: 100,
}

export function BiometricReader(props: DiagramNodeProps) {
  return (
    <Shape
      {...BIOMETRIC_READER}
      {...props}
      _style={extendStyle(BIOMETRIC_READER, props)}
    />
  )
}
