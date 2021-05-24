<script>
import {h} from 'vue'

function Heading(props, context) {
    return h(`h${props.level}`, context.attrs, context.slots)
}
export default Heading
</script>