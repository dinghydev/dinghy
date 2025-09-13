import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FILE_BROWSER = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.bootstrap.rrect;rSize=5;strokeColor=#CED4DA;html=1;whiteSpace=wrap;fillColor=#FFFFFF;fontColor=#7D868C;align=left;spacingLeft=0;spacing=15;fontSize=14;',
  },
  _width: 0,
  _height: 30,
}

export function FileBrowser(props: DiagramNodeProps) {
  return (
    <Shape
      {...FILE_BROWSER}
      {...props}
      _style={extendStyle(FILE_BROWSER, props)}
    />
  )
}
