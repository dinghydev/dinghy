import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STORAGE_ICON = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.storage;',
  },
  _width: 40,
  _height: 11,
}

export function StorageIcon(props: DiagramNodeProps) {
  return (
    <Shape
      {...STORAGE_ICON}
      {...props}
      _style={extendStyle(STORAGE_ICON, props)}
    />
  )
}
