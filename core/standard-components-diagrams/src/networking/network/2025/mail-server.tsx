import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAIL_SERVER = {
  _style: {
    entity:
      'fillColorStyles=neutralFill;neutralFill=#9DA6A8;shape=mxgraph.networks2.icon;aspect=fixed;fillColor=#EDEDED;strokeColor=#000000;gradientColor=#5B6163;network2IconShadow=1;network2bgFillColor=none;network2Icon=mxgraph.networks2.mail_server;network2IconYOffset=-0.02556;network2IconW=1;network2IconH=0.7875;',
  },
  _original_width: 50,
  _original_height: 39.375,
}

export function MailServer(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAIL_SERVER}
      {...props}
      _style={extendStyle(MAIL_SERVER, props)}
    />
  )
}
