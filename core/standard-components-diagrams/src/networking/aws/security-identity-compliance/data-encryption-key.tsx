import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_ENCRYPTION_KEY = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.data_encryption_key;',
  _width: 62,
  _height: 78,
}

export function DataEncryptionKey(props: DiagramNodeProps) {
  return <Shape {...DATA_ENCRYPTION_KEY} {...props} />
}
