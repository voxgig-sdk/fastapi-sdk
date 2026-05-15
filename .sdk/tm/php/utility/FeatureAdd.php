<?php
declare(strict_types=1);

// Fastapi SDK utility: feature_add

class FastapiFeatureAdd
{
    public static function call(FastapiContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
