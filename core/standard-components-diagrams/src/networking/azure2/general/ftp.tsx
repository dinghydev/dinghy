import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FTP = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/FTP.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 48,
}

export function Ftp(props: DiagramNodeProps) {
  return <Shape {...FTP} {...props} _style={extendStyle(FTP, props)} />
}
