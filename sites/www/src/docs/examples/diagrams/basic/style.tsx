import { Shape } from '@dinghy/base-components'

export default function Stack() {
  return (
    <Shape _title='Style Example' _direction='vertical'>
      <Shape
        _style={{
          fillColor: '#ff0000',
          fontColor: '#00ff00',
          strokeColor: '#0000ff',
        }}
      >
        Style as object
      </Shape>
      <Shape _style='fillColor=#ff0000;fontColor=#00ff00;strokeColor=#0000ff'>
        Style as string
      </Shape>
      <Shape
        _style={{
          container: 'fontColor=blue',
          entity: {
            fontColor: 'red',
          },
        }}
      >
        Style for different shape
        <Shape
          _style={{
            container: 'fontColor=blue',
            entity: {
              fontColor: 'red',
            },
          }}
        >
          Child
        </Shape>
      </Shape>
    </Shape>
  )
}
