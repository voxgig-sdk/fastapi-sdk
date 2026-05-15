<?php
declare(strict_types=1);

// Fastapi SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FastapiFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FastapiBaseFeature();
            case "test":
                return new FastapiTestFeature();
            default:
                return new FastapiBaseFeature();
        }
    }
}
