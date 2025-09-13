import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FTP_SERVER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.ftp_server;',
  },
  _width: 71,
  _height: 97,
}

export function FtpServer(props: DiagramNodeProps) {
  return (
    <Shape {...FTP_SERVER} {...props} _style={extendStyle(FTP_SERVER, props)} />
  )
}
