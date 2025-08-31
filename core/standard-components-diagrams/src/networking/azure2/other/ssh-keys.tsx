import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SSH_KEYS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/SSH_Keys.svg;strokeColor=none;',
  _width: 68,
  _height: 60,
}

export function SshKeys(props: DiagramNodeProps) {
  return (
    <Shape {...SSH_KEYS} {...props} _style={extendStyle(SSH_KEYS, props)} />
  )
}
