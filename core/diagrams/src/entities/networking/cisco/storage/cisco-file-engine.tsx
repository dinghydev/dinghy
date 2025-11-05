import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CISCO_FILE_ENGINE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.storage.cisco_file_engine;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 90,
  _height: 64,
}

export function CiscoFileEngine(props: NodeProps) {
  return (
    <Shape
      {...CISCO_FILE_ENGINE}
      {...props}
      _style={extendStyle(CISCO_FILE_ENGINE, props)}
    />
  )
}
