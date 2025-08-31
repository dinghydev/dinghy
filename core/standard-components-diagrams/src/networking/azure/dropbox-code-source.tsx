import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DROPBOX_CODE_SOURCE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.dropbox_code_source;',
  _width: 50,
  _height: 47.5,
}

export function DropboxCodeSource(props: DiagramNodeProps) {
  return (
    <Shape
      {...DROPBOX_CODE_SOURCE}
      {...props}
      _style={extendStyle(DROPBOX_CODE_SOURCE, props)}
    />
  )
}
