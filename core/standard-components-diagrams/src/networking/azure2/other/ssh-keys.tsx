import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SSH_KEYS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/SSH_Keys.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function SshKeys(props: DiagramNodeProps) {
  return (
    <Shape {...SSH_KEYS} {...props} _style={extendStyle(SSH_KEYS, props)} />
  )
}
