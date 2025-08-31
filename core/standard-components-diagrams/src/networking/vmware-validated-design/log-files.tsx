import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOG_FILES = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.log_files;',
  },
  _width: 40,
  _height: 50,
}

export function LogFiles(props: DiagramNodeProps) {
  return (
    <Shape {...LOG_FILES} {...props} _style={extendStyle(LOG_FILES, props)} />
  )
}
