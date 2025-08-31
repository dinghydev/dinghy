import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNIVERSAL_STORAGE_API = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#DF8C42;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.universal_storage_api;',
  _width: 34,
  _height: 34,
}

export function UniversalStorageApi(props: DiagramNodeProps) {
  return (
    <Shape
      {...UNIVERSAL_STORAGE_API}
      {...props}
      _style={extendStyle(UNIVERSAL_STORAGE_API, props)}
    />
  )
}
